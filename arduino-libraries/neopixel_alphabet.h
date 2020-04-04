#include <stdio.h>
//X coordinate is important here --> Not below 8
void setpixelAlphabet(String alpha, int pixel, uint32_t color){
	int x = 8; //Important!!!
	int j = pixel;
	if (alpha == "I"){
		for(int i=0; i<4; i++){
			setPixelColor(j, color);
			j = j + x;
		}
	}else if (alpha == "D"){
		setPixelColor(j+1, color);
        setPixelColor(j+(x+2), color);
        setPixelColor(j+((2*x)+2), color);
        setPixelColor(j+((3*x)+1), color);
		for(int i=0; i<4; i++){
			setPixelColor(j, color);
			j = j + x;
		}
	}else if (alpha == "F"){
		setPixelColor(j+1, color);
		setPixelColor(j+2, color);
		setPixelColor(j+((2*x)+1), color);
		setPixelColor(j+((2*x)+2), color);
		for(int i=0; i<4; i++){
			setPixelColor(j, color);
			j = j + x;
		}
	}else if (alpha == "K"){
		setPixelColor(j+2, color);
        setPixelColor(j+(x+1), color);
        setPixelColor(j+((2*x)+1), color);
        setPixelColor(j+((3*x)+2), color);
		for(int i=0; i<4; i++){
			setPixelColor(j, color);
			j = j + x;
		}
	}else if (alpha == "T"){
		setPixelColor(j+1, color);
        setPixelColor(j-1, color);
		for(int i=0; i<4; i++){
			setPixelColor(j, color);
			j = j + x;
		}
	}else if (alpha == "A"){
    	setPixelColor(j, color);
    	setPixelColor(j+(2*x), color);
    	setPixelColor(j+(x-1), color);
    	int m = j+(x-1);
    	for(int i=0; i<2; i++){
    	    m = m + x;
            setPixelColor(m, color);
        }
        setPixelColor(j+(x-1), color);
        int n = j+(x+1);
    	for(int i=0; i<2; i++){
    	    n = n + x;
    		setPixelColor(n, color);
    	}
	}else if (alpha == "B"){
	    int n = j;
    	setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
        	setPixelColor(j, color);
        	j = j + x;
        	if(j == n+x){
        	    setPixelColor(j+2, color);
        	}
        	if(j == n+(2*x)){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
            if(j == n+(3*x)){
                setPixelColor(j+2, color);
            }
        }
        setPixelColor(j-(x-2), color);
        setPixelColor(j-(x-1), color);
	}else if (alpha == "C"){
	    setPixelColor(j-(x-2), color);
        setPixelColor(j-(x-1), color);
        for(int i=0; i<3; i++){
        	setPixelColor(j, color);
        	j = j + x;
        }
        setPixelColor(j+1, color);
        setPixelColor(j+2, color);
	}else if (alpha == "E"){
	    int n = j;
		setPixelColor(j+1, color);
		setPixelColor(j+2, color);
		for(int i=0; i<5; i++){
			setPixelColor(j, color);
			j = j + x;
			if(j == n+(2*x)){
                setPixelColor(j+1, color);
            }
            if(j == n+(4*x)){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
		}
	}else if (alpha == "D"){
	    int n = j;
		setPixelColor(j+1, color);
		for(int i=0; i<5; i++){
			setPixelColor(j, color);
			j = j + x;
			if(j == n+x){
                setPixelColor(j+2, color);
            }
            if(j == n+(2*x)){
                setPixelColor(j+2, color);
            }
            if(j == n+(4*x)){
                setPixelColor(j+1, color);
            }
		}
	}else if (alpha == "G"){
	int n = j;
	    setPixelColor(j-(x-3), color);
	    setPixelColor(j-(x-2), color);
        setPixelColor(j-(x-1), color);
        for(int i=0; i<3; i++){
        	setPixelColor(j, color);
        	j = j + x;
        	if(j == n+x){
                setPixelColor(j+2, color);
                setPixelColor(j+3, color);
            }
            if(j == n+(2*x)){
                setPixelColor(j+3, color);
            }
        }
        setPixelColor(j+1, color);
        setPixelColor(j+2, color);
        setPixelColor(j+3, color);
	}else if (alpha == "H"){
	    int n = j+2;
	    int m = j;
        for(int i=0; i<5; i++){
            setPixelColor(j, color);
          	j = j + x;
            if(j == m+(2*x)){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "J"){
	    int n = j;
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
          	j = j + x;
            if(j == n+(2*x)){
                setPixelColor(j-2, color);
            }
        }
        setPixelColor(j-(x+1), color);
    }else if (alpha == "L"){
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
            j = j + x;
   		}
   		setPixelColor(j-(x-2), color);
   		setPixelColor(j-(x-1), color);
	}else if (alpha == "N"){
	    int n = j+3;
	    int m = j;
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
          	j = j + x;
            if(j == m+x){
                setPixelColor(j+1, color);
            }
            if(j == m+(2*x)){
                setPixelColor(j+2, color);
            }
        }
        for(int i=0; i<4; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "M"){
	    int n = j+4;
	    int m = j;
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
          	j = j + x;
            if(j == m+x){
                setPixelColor(j+1, color);
                setPixelColor(j+3, color);
            }
            if(j == m+(2*x)){
                setPixelColor(j+2, color);
            }
        }
        for(int i=0; i<4; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "O"){
	    int n = j+3;
	    setPixelColor(j-(x-2), color);
        setPixelColor(j-(x-1), color);
        for(int i=0; i<3; i++){
        	setPixelColor(j, color);
        	j = j + x;
        }
        setPixelColor(j+1, color);
        setPixelColor(j+2, color);
        for(int i=0; i<3; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "U"){
	    int n = j+2;
	    int m = j;
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
          	j = j + x;
            if(j == m+(3*x)){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<4; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "V"){
	    int n = j+2;
	    int m = j;
        for(int i=0; i<3; i++){
            setPixelColor(j, color);
          	j = j + x;
        }
        setPixelColor(j+1, color);
        for(int i=0; i<3; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "W"){
	    int n = j+4;
	    int m = j;
        for(int i=0; i<3; i++){
            setPixelColor(j, color);
          	j = j + x;
            if(j == m+(2*x)){
                setPixelColor(j+2, color);
            }
        }
        setPixelColor(j+1, color);
        setPixelColor(j+3, color);
        for(int i=0; i<3; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "X"){
	    int n = j+2;
	    int m = j;
	    setPixelColor(j+(2*x), color);
        for(int i=0; i<3; i++){
            setPixelColor(j, color);
          	j = j + (x+1);
            if(j == m+(2*x)){
                setPixelColor(j+2, color);
            }
        }
        setPixelColor(n, color);
	}else if (alpha == "Y"){
	    int n = j+2;
	    int m = j;
        for(int i=0; i<2; i++){
            setPixelColor(j, color);
          	j = j + (x+1);
            if(j == m+(x+1)){
                setPixelColor(j+x, color);
                setPixelColor(j+(2*x), color);
            }
        }
        setPixelColor(n, color);
	}else if (alpha == "Z"){
	    int n = j;
		setPixelColor(j+1, color);
		setPixelColor(j+2, color);
		setPixelColor(j+3, color);
		setPixelColor(j+(x+3), color);
		for(int i=0; i<5; i++){
			j = j + x;
			if(j == n+(2*x)){
                setPixelColor(j+2, color);
            }
            if(j == n+(3*x)){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
                setPixelColor(j+3, color);
            }
		}
	}else if (alpha == "P"){
	    int n = j;
    	setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
        	setPixelColor(j, color);
        	j = j + x;
        	if(j == n+x){
        	    setPixelColor(j+2, color);
        	}
        	if(j == n+(2*x)){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
        }
	}else if (alpha == "R"){
	    int n = j;
    	setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
        	setPixelColor(j, color);
        	j = j + x;
        	if(j == n+x){
        	    setPixelColor(j+2, color);
        	}
        	if(j == n+(2*x)){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
            if(j == n+(3*x)){
                setPixelColor(j+1, color);
            }
        }
        setPixelColor(j-(x-2), color);
	}else if (alpha == "Q"){
	    int n = j+3;
	    int m = j;
	    setPixelColor(j-(x-2), color);
        setPixelColor(j-(x-1), color);
        for(int i=0; i<3; i++){
        	setPixelColor(j, color);
        	j = j + x;
        	if (j == m+(x*2)){
        	    setPixelColor(j+2, color);
        	}
        }
        setPixelColor(j+1, color);
        setPixelColor(j+3, color);
        for(int i=0; i<2; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "S"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            if (j != m+(3*x)){
                setPixelColor(j, color);
            }
          	j = j + x;
            if(j == m+(2*x)){
                setPixelColor(j+1, color);
            }
            if(j == m+(4*x)){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            if (n != p+x){
                setPixelColor(n, color);
            }
          	n = n + x;
        }
    //****************************
    //*********NUMBERS************
    //****************************
	}else if (alpha == "2"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            if (j != m+x){
                setPixelColor(j, color);
            }
          	j = j + x;
            if(j == m+(2*x)){
                setPixelColor(j+1, color);
            }
            if(j == m+(4*x)){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
        if (n != p+(3*x)){
            setPixelColor(n, color);
        }
          	n = n + x;
        }
	}else if (alpha == "1"){
	    setPixelColor(j-1, color);
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
            j = j + x;
        }
	}else if (alpha == "3"){
	    int n = j;
	    int m = j+3;
		setPixelColor(j+1, color);
		setPixelColor(j+2, color);
		for(int i=0; i<5; i++){
			setPixelColor(m, color);
			m = m + x;
			j = j + x;
			if(j == n+(2*x)){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
            if(j == n+(4*x)){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
		}
	}else if (alpha == "0"){
	    int n = j+3;
	    setPixelColor(j-(x-2), color);
        setPixelColor(j-(x-1), color);
        for(int i=0; i<3; i++){
        	setPixelColor(j, color);
        	j = j + x;
        }
        setPixelColor(j+1, color);
        setPixelColor(j+2, color);
        for(int i=0; i<3; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "4"){
	    int n = j+2;
	    int m = j;
        for(int i=0; i<4; i++){
            if(j != m+(2*x) && j != m+(3*x)){
                setPixelColor(j, color);
            }
          	j = j + x;
            if(j == m+x){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<4; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "5"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            if (j != m+(3*x)){
                setPixelColor(j, color);
            }
          	j = j + x;
            if(j == m+(2*x)){
                setPixelColor(j+1, color);
            }
            if(j == m+(4*x)){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            if (n != p+x){
                setPixelColor(n, color);
            }
          	n = n + x;
        }
	}else if (alpha == "8"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            setPixelColor(j, color);
          	j = j + x;
            if(j == m+(2*x)){
                setPixelColor(j+1, color);
            }
            if(j == m+(4*x)){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
	}else if (alpha == "6"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            setPixelColor(j, color);
          	j = j + x;
            if(j == m+(2*x)){
                setPixelColor(j+1, color);
            }
            if(j == m+(4*x)){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            if (n != p+x){
                setPixelColor(n, color);
            }
          	n = n + x;
        }
	}else if (alpha == "9"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            if (j != m+(3*x)){
                setPixelColor(j, color);
            }
          	j = j + x;
            if(j == m+(2*x)){
                setPixelColor(j+1, color);
            }
            if(j == m+(4*x)){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            setPixelColor(n, color);
          	n = n + x;
        }
    }else if (alpha == "7"){
        int m = j;
        setPixelColor(j-1, color);
        setPixelColor(j-2, color);
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
            j = j + x;
            if(j == m+(2*x)){
                setPixelColor(j-1, color);
                setPixelColor(j+1, color);
            }
   		}
	}
}