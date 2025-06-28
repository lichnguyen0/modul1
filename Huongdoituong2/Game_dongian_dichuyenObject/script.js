/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;


    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= 100;
    }

    this.moveUp = function(){
        this.top -= 100;
    }

    this.moveDown = function(){
        this.top += 100;
    }


}
var hero = new Hero('cat.svg', 20, 30, 200);

function render(){
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

render();

document.addEventListener('keydown', function(event){
    switch(event.key){
        case 'ArrowRight':
            if(hero.left < window.innerWidth - hero.size){
                hero.moveRight();
            }
            break;
        case 'ArrowLeft':
            if(hero.left > 0){
                hero.moveLeft();
            }
            break;
        case 'ArrowUp':
            if(hero.top > 0){
                hero.moveUp();
            }
            break;
        case 'ArrowDown':
            if(hero.top < window.innerHeight - hero.size){
                hero.moveDown();
            }
            break;
    }
    render();
});


var hero = new Hero('cat.svg', 20, 30, 200);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();