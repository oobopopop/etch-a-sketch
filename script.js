function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



function createGrid(columns){
    
    for (let i = 0; i < (columns ** 2); i++){
        const grid = document.querySelector('.grid');
        const div = document.createElement('div');

        grid.style.cssText = `grid-template-columns:
        repeat(${columns},  minmax(5px, 1fr));`;

        grid.appendChild(div);
    }

    const nodes = document.querySelector('.grid').childNodes;
    for(let i=0; i<nodes.length; i++) {
        nodes[i].onmouseenter = function hoverEffect(){
            nodes[i].style.background = getRandomColor();
        }
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