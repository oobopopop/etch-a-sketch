function createGrid(columns){
    
    for (i = 0; i < (columns ** 2); i++){
        const grid = document.querySelector('.grid');
        const div = document.createElement('div');
        
        grid.style.cssText=`grid-template-columns:
            repeat(${columns},  minmax(5px, 1fr));`;
            
        
        grid.appendChild(div);
    };
};

createGrid(16);