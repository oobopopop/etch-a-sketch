function createGrid(columns){
    
    for (i = 0; i < (columns ** 2); i++){
        const grid = document.querySelector('.grid');
        const div = document.createElement('div');

        grid.style.cssText = `grid-template-columns:
        repeat(${columns},  minmax(5px, 1fr));`;

        grid.appendChild(div);
        div.onmouseenter = function hoverEffect(){
            div.style.background = 'white';
          };

    }
    
}


function newGrid(){
    const btn = document.querySelector('.clear');
    btn.onclick = function promptSides(){
        const sides = prompt('How many squares per side? (1-100)');
        const grid = document.querySelector('.grid');
        grid.textContent = '';

        if (sides > 0 && sides < 101){
                createGrid(sides);
        } 
    }
}

createGrid(16);
newGrid();