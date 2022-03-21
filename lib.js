function $(selector){
    var self = {
        el:document.querySelector(selector),
        html:()=> self.el.innerHTML,
        on:(event, callback)=>{
            self.el.addEventListener(event, callback)
        },
        hide:()=> {
            self.el.style.display = 'none'
        },
        attr:(attr, value)=>{
            if(value == null){
                self.el.getAttribute(attr)
            }else{
            self.el.setAttribute(attr, value);
            }
        },
        setHTML:(code)=>{
            self.el.innerHTML = "";
            self.el.innerHTML = code;
        },
        createChld:(childElement, id, clss, innerHTML)=>{
            var el = document.createElement(childElement);
            el.setAttribute('id', id);
            el.setAttribute('class', clss);
            el.innerHTML = innerHTML;
            self.el.appendChild(el);
        },
        addClass:(clss)=>{
            self.el.classList.add(clss)
        },
        addId:(id)=>{
            self.el.id = id;
        },
        value:()=>{
            return self.el.value;
        },
        show:()=>{
            self.el.style.display = 'block'
        },
        style:(cssProperty, value)=>{
            var property = `${cssProperty}:${value};`;
            self.el.setAttribute('style', property);
        },
        src:(src)=>{
            self.el.src = src;
        }
    }
    return self
}

function lg(message){
    var log = document.getElementById('log');
    var sl = {
    msg:(message)=>{
        log.innerHTML += `${message} <br> `

    },
    clear:()=>{
    log.innerHTML = ""
    }
    }
    return sl;
}

