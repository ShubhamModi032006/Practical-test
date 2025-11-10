import java.util.*;

class Box{
    double l,w,h;
    public
    Box(double len,double wgt,double hig){
        len = l;
        wgt = w;
        hig = h;
    }
    Box(double num){
        l = w = h = num;
    }
    Box(){
        l=w=h=1;
    }

    double vol(){
        return l*h*w;
    }

    public static void main(String args[]){
        Box b1 = new Box(2.0,3.0,4.0);
        Box b2 = new Box(5.0);
        Box b3 = new Box();

        System.out.println("Volume of b1: " + b1.vol());
        System.out.println("Volume of b2: " + b2.vol());
        System.out.println("Volume of b3: " + b3.vol());
    }
}

