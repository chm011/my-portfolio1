<script>
import * as d3 from 'd3';

let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
let arc = arcGenerator({
  startAngle: 0,
  endAngle: 2 * Math.PI,
});

export let data = [];
export let selectedIndex = -1;

let sliceGenerator = d3.pie().value((d) => d.value);

$: arcData = sliceGenerator(data);
$: arcs = arcData.map((d) => arcGenerator(d));

let colors = d3.scaleOrdinal(d3.schemeTableau10);



</script>

<div class="legend-container">
    <svg viewBox="-50 -50 100 100" width="300" height="300">
        {#each arcs as arc, index} 
        <path 
            d={arc} 
            fill={ colors(index) }
            class:selected={selectedIndex === index}
            on:click={() => selectedIndex = selectedIndex === index ? -1 : index}
            /> 
        {/each}
    </svg>
    
    <ul class="legend">
      {#each data as d, index}
        <li style="--color: {colors(index)}">
          <span class="swatch"></span>
          {d.label} <em>({d.value})</em>
        </li>
      {/each}
    </ul>
  </div>
  



<style>
    svg:hover path:not(:hover) {
        opacity: 50%;
    }

    path{
        transition: opacity 300ms;
        outline: none;
    }
    
    .legend {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
        gap: 1em; 
        flex: 1;
        padding: 1em;  
        margin-top: 1em; 
        border: 1px solid #ccc;
        
    }

    .legend li{
        display: flex;
        align-items: center;
        gap: 0.5em;

    }

    .swatch {
    width: 1em;
    height: 1em;
    aspect-ratio: 1 / 1;
    background-color: var(--color); 
    border-radius: 50%; 
    display: inline-block; 
    border: 1px solid #ccc;
  }

  .legend-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 100%;
    padding: 1em;
    gap: 2em;
  }

  .selected {
    --color: oklch(60% 45% 0) !important;

  &:is(path) {
    fill: var(--color);
  }
}
</style>