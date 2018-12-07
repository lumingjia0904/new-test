import Vue from 'vue'

Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
});

Vue.directive('my-move',{
    bind : function(el,binding,vnode){
        //准备工作
        //例如，添加事件处理器或只需要运行一次的高耗任务
        el.addEventListener('touchstart', (e)=>{
            if(e && e.preventDefault){
                e.preventDefault();
                e.stopPropagation();
            }else{
                event.returnValue=false;
            }
            var x = e.changedTouches[0].clientX;
            var y = e.changedTouches[0].clientY;
            var target = document.elementFromPoint(x, y);
            binding.value.moveStart(target);
        })
        el.addEventListener('touchmove', (e)=>{
            if(e && e.preventDefault){
                e.preventDefault();
                e.stopPropagation();
            }else{
                event.returnValue=false;
            }
            var x = e.changedTouches[0].clientX;
            var y = e.changedTouches[0].clientY;
            var target = document.elementFromPoint(x, y);
            binding.value.move(target);
        })
        el.addEventListener('touchend', (e)=>{
            if(e && e.preventDefault){
                e.preventDefault();
                e.stopPropagation();
            }else{
                event.returnValue=false;
            }
            binding.value.moveEnd();
        })
    },

    update : function(){
        //值更新时的工作
        //也会以初始值为参数调用一次
    },

    unbind : function(el){
        //清理工作
        //例如，删除bind()添加的事件监听器
        el.removeEventListener('touchstart', (e)=>{
            binding.value.moveStart();
        })
        el.removeEventListener('touchmove', (e)=>{
            binding.value.move();
        })
        el.removeEventListener('touchend', ()=>{
            binding.value.moveEnd();
        })
    }
});



Vue.directive('my-move2',function(el, binding, vnode) {
    el.addEventListener('touchstart', (e)=>{
        binding.value.moveStart();
    })
    el.addEventListener('touchmove', (e)=>{
        binding.value.move();
    })
    el.addEventListener('touchend', ()=>{
        binding.value.moveEnd();
    })
});

Vue.directive('stop-move',{
    bind : function(el,binding,vnode){
        //准备工作
        //例如，添加事件处理器或只需要运行一次的高耗任务
        el.addEventListener('touchstart', (e)=>{
            if(e && e.preventDefault){
                e.preventDefault();
                e.stopPropagation();
            }else{
                event.returnValue=false;
            }
        })
        el.addEventListener('touchmove', (e)=>{
            if(e && e.preventDefault){
                e.preventDefault();
                e.stopPropagation();
            }else{
                event.returnValue=false;
            }
        })
        el.addEventListener('touchend', (e)=>{
            if(e && e.preventDefault){
                e.preventDefault();
                e.stopPropagation();
            }else{
                event.returnValue=false;
            }
        })
    },

    update : function(){
        //值更新时的工作
        //也会以初始值为参数调用一次
    },

    unbind : function(el){
        //清理工作
        //例如，删除bind()添加的事件监听器
        el.removeEventListener('touchstart', (e)=>{
            binding.value.moveStart();
        })
        el.removeEventListener('touchmove', (e)=>{
            binding.value.move();
        })
        el.removeEventListener('touchend', ()=>{
            binding.value.moveEnd();
        })
    }
});