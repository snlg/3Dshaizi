/**
 * Created by Administrator on 16-4-26.
 */
var TZ={};
TZ.object=function(json){//rotate��ʾת�ĽǶ�;inputs��ʾ��ťѡ������szNode��ʾ����ѡ����
    this.x=0;/*��������x��ת*/
    this.y=0;/*��������y��ת*/
    this.inputs=json.inputs;/*��ťѡ����*/
    this.szNode=json.szNode;//"����ѡ����"
    this.init=function(){//��ʼ��
        var obj=this;//��¼ʵ������

        //��
        obj.$$(this.inputs)[0].addEventListener('click',function(){
            obj.top(json);
            var node=document.querySelector(obj.szNode);
            obj.animate(node);
        });

        //��
        obj.$$(this.inputs)[1].addEventListener('click',function(){
            obj.bottom(json);
            var node=document.querySelector(obj.szNode);
            obj.animate(node);
        });

        //��
        obj.$$(this.inputs)[2].addEventListener('click',function(){
            obj.left(json);
            var node=document.querySelector(obj.szNode);
            obj.animate(node);
        });

        //��
        obj.$$(this.inputs)[3].addEventListener('click',function(){
            obj.right(json);
            var node=document.querySelector(obj.szNode);
            obj.animate(node);
        });
    }

    this.init();
};

TZ.object.prototype={
    $$:function(selector){
        return document.querySelectorAll(selector);
    },
    top:function(json){
        this.x+=json.rotate;
    },
    bottom:function(json){
        this.x-=json.rotate;
    }
    ,
    left:function(json){
        this.y+=json.rotate;
    }
    ,
    right:function(json){
        this.y-=json.rotate;
    },
    animate:function(node){
        node.style.transform="rotateX("+this.x+"deg) rotateY("+this.y+"deg)";
        node.style.WebkitTransform="rotateX("+this.x+"deg) rotateY("+this.y+"deg)";
        node.style.MozTransform="rotateX("+this.x+"deg) rotateY("+this.y+"deg)";
    }
};

var szDo1=new TZ.object({
    rotate:90,
    inputs:'#aa input',
    szNode:"#a"
});

var szDo2=new TZ.object({
    rotate:90,
    inputs:'#bb input',
    szNode:"#b"
});