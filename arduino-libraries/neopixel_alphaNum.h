#include <stdio.h>

void setpixelAlphaNum(String alpha, int pixel, uint32_t color){
	int j = pixel;
	if (alpha == "I"){
		for(int i=0; i<4; i++){
			setPixelColor(j, color);
			j = j + 8;
		}
	}else if (alpha == "D"){
		setPixelColor(j+1, color);
        setPixelColor(j+10, color);
        setPixelColor(j+18, color);
        setPixelColor(j+25, color);
		for(int i=0; i<4; i++){
			setPixelColor(j, color);
			j = j + 8;
		}
	}else if (alpha == "F"){
		setPixelColor(j+1, color);
		setPixelColor(j+2, color);
		setPixelColor(j+17, color);
		setPixelColor(j+18, color);
		for(int i=0; i<4; i++){
			setPixelColor(j, color);
			j = j + 8;
		}
	}else if (alpha == "K"){
		setPixelColor(j+2, color);
        setPixelColor(j+9, color);
        setPixelColor(j+17, color);
        setPixelColor(j+26, color);
		for(int i=0; i<4; i++){
			setPixelColor(j, color);
			j = j + 8;
		}
	}else if (alpha == "T"){
		setPixelColor(j+1, color);
        setPixelColor(j-1, color);
		for(int i=0; i<4; i++){
			setPixelColor(j, color);
			j = j + 8;
		}
	}else if (alpha == "A"){
    	setPixelColor(j, color);
    	setPixelColor(j+16, color);
    	setPixelColor(j+7, color);
    	int m = j+7;
    	for(int i=0; i<2; i++){
    	    m = m + 8;
            setPixelColor(m, color);
        }
        setPixelColor(j+9, color);
        int n = j+9;
    	for(int i=0; i<2; i++){
    	    n = n + 8;
    		setPixelColor(n, color);
    	}
	}else if (alpha == "B"){
	    int n = j;
    	setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
        	setPixelColor(j, color);
        	j = j + 8;
        	if(j == n+8){
        	    setPixelColor(j+2, color);
        	}
        	if(j == n+16){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
            if(j == n+24){
                setPixelColor(j+2, color);
            }
        }
        setPixelColor(j-6, color);
        setPixelColor(j-7, color);
	}else if (alpha == "C"){
	    setPixelColor(j-6, color);
        setPixelColor(j-7, color);
        for(int i=0; i<3; i++){
        	setPixelColor(j, color);
        	j = j + 8;
        }
        setPixelColor(j+1, color);
        setPixelColor(j+2, color);
	}else if (alpha == "E"){
	    int n = j;
		setPixelColor(j+1, color);
		setPixelColor(j+2, color);
		for(int i=0; i<5; i++){
			setPixelColor(j, color);
			j = j + 8;
			if(j == n+16){
                setPixelColor(j+1, color);
            }
            if(j == n+32){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
		}
	}else if (alpha == "D"){
	    int n = j;
		setPixelColor(j+1, color);
		for(int i=0; i<5; i++){
			setPixelColor(j, color);
			j = j + 8;
			if(j == n+8){
                setPixelColor(j+2, color);
            }
            if(j == n+16){
                setPixelColor(j+2, color);
            }
            if(j == n+32){
                setPixelColor(j+1, color);
            }
		}
	}else if (alpha == "G"){
	int n = j;
	    setPixelColor(j-5, color);
	    setPixelColor(j-6, color);
        setPixelColor(j-7, color);
        for(int i=0; i<3; i++){
        	setPixelColor(j, color);
        	j = j + 8;
        	if(j == n+8){
                setPixelColor(j+2, color);
                setPixelColor(j+3, color);
            }
            if(j == n+16){
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
          	j = j + 8;
            if(j == m+16){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "J"){
	    int n = j;
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
          	j = j + 8;
            if(j == n+16){
                setPixelColor(j-2, color);
            }
        }
        setPixelColor(j-9, color);
    }else if (alpha == "L"){
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
            j = j + 8;
   		}
   		setPixelColor(j-6, color);
   		setPixelColor(j-7, color);
	}else if (alpha == "N"){
	    int n = j+3;
	    int m = j;
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
          	j = j + 8;
            if(j == m+8){
                setPixelColor(j+1, color);
            }
            if(j == m+16){
                setPixelColor(j+2, color);
            }
        }
        for(int i=0; i<4; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "M"){
	    int n = j+4;
	    int m = j;
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
          	j = j + 8;
            if(j == m+8){
                setPixelColor(j+1, color);
                setPixelColor(j+3, color);
            }
            if(j == m+16){
                setPixelColor(j+2, color);
            }
        }
        for(int i=0; i<4; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "O"){
	    int n = j+3;
	    setPixelColor(j-6, color);
        setPixelColor(j-7, color);
        for(int i=0; i<3; i++){
        	setPixelColor(j, color);
        	j = j + 8;
        }
        setPixelColor(j+1, color);
        setPixelColor(j+2, color);
        for(int i=0; i<3; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "U"){
	    int n = j+2;
	    int m = j;
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
          	j = j + 8;
            if(j == m+24){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<4; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "V"){
	    int n = j+2;
	    int m = j;
        for(int i=0; i<3; i++){
            setPixelColor(j, color);
          	j = j + 8;
        }
        setPixelColor(j+1, color);
        for(int i=0; i<3; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "W"){
	    int n = j+4;
	    int m = j;
        for(int i=0; i<3; i++){
            setPixelColor(j, color);
          	j = j + 8;
            if(j == m+16){
                setPixelColor(j+2, color);
            }
        }
        setPixelColor(j+1, color);
        setPixelColor(j+3, color);
        for(int i=0; i<3; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "X"){
	    int n = j+2;
	    int m = j;
	    setPixelColor(j+16, color);
        for(int i=0; i<3; i++){
            setPixelColor(j, color);
          	j = j + 9;
            if(j == m+16){
                setPixelColor(j+2, color);
            }
        }
        setPixelColor(n, color);
	}else if (alpha == "Y"){
	    int n = j+2;
	    int m = j;
        for(int i=0; i<2; i++){
            setPixelColor(j, color);
          	j = j + 9;
            if(j == m+9){
                setPixelColor(j+8, color);
                setPixelColor(j+16, color);
            }
        }
        setPixelColor(n, color);
	}else if (alpha == "Z"){
	    int n = j;
		setPixelColor(j+1, color);
		setPixelColor(j+2, color);
		setPixelColor(j+3, color);
		setPixelColor(j+11, color);
		for(int i=0; i<5; i++){
			j = j + 8;
			if(j == n+16){
                setPixelColor(j+2, color);
            }
            if(j == n+24){
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
        	j = j + 8;
        	if(j == n+8){
        	    setPixelColor(j+2, color);
        	}
        	if(j == n+16){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
        }
	}else if (alpha == "R"){
	    int n = j;
    	setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
        	setPixelColor(j, color);
        	j = j + 8;
        	if(j == n+8){
        	    setPixelColor(j+2, color);
        	}
        	if(j == n+16){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
            if(j == n+24){
                setPixelColor(j+1, color);
            }
        }
        setPixelColor(j-6, color);
	}else if (alpha == "Q"){
	    int n = j+3;
	    int m = j;
	    setPixelColor(j-6, color);
        setPixelColor(j-7, color);
        for(int i=0; i<3; i++){
        	setPixelColor(j, color);
        	j = j + 8;
        	if (j == m+16){
        	    setPixelColor(j+2, color);
        	}
        }
        setPixelColor(j+1, color);
        setPixelColor(j+3, color);
        for(int i=0; i<2; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "S"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            if (j != m+24){
                setPixelColor(j, color);
            }
          	j = j + 8;
            if(j == m+16){
                setPixelColor(j+1, color);
            }
            if(j == m+32){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            if (n != p+8){
                setPixelColor(n, color);
            }
          	n = n + 8;
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
            if (j != m+8){
                setPixelColor(j, color);
            }
          	j = j + 8;
            if(j == m+16){
                setPixelColor(j+1, color);
            }
            if(j == m+32){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
        if (n != p+24){
            setPixelColor(n, color);
        }
          	n = n + 8;
        }
	}else if (alpha == "1"){
	    setPixelColor(j-1, color);
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
            j = j + 8;
        }
	}else if (alpha == "3"){
	    int n = j;
	    int m = j+3;
		setPixelColor(j+1, color);
		setPixelColor(j+2, color);
		for(int i=0; i<5; i++){
			setPixelColor(m, color);
			m = m + 8;
			j = j + 8;
			if(j == n+16){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
            if(j == n+32){
                setPixelColor(j+1, color);
                setPixelColor(j+2, color);
            }
		}
	}else if (alpha == "0"){
	    int n = j+3;
	    setPixelColor(j-6, color);
        setPixelColor(j-7, color);
        for(int i=0; i<3; i++){
        	setPixelColor(j, color);
        	j = j + 8;
        }
        setPixelColor(j+1, color);
        setPixelColor(j+2, color);
        for(int i=0; i<3; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "4"){
	    int n = j+2;
	    int m = j;
        for(int i=0; i<4; i++){
            if(j != m+16 && j != m+24){
                setPixelColor(j, color);
            }
          	j = j + 8;
            if(j == m+8){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<4; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "5"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            if (j != m+24){
                setPixelColor(j, color);
            }
          	j = j + 8;
            if(j == m+16){
                setPixelColor(j+1, color);
            }
            if(j == m+32){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            if (n != p+8){
                setPixelColor(n, color);
            }
          	n = n + 8;
        }
	}else if (alpha == "8"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            setPixelColor(j, color);
          	j = j + 8;
            if(j == m+16){
                setPixelColor(j+1, color);
            }
            if(j == m+32){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
	}else if (alpha == "6"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            setPixelColor(j, color);
          	j = j + 8;
            if(j == m+16){
                setPixelColor(j+1, color);
            }
            if(j == m+32){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            if (n != p+8){
                setPixelColor(n, color);
            }
          	n = n + 8;
        }
	}else if (alpha == "9"){
	    int n = j+2;
	    int m = j;
	    int p = n;
	    setPixelColor(j+1, color);
        for(int i=0; i<5; i++){
            if (j != m+24){
                setPixelColor(j, color);
            }
          	j = j + 8;
            if(j == m+16){
                setPixelColor(j+1, color);
            }
            if(j == m+32){
                setPixelColor(j+1, color);
            }
        }
        for(int i=0; i<5; i++){
            setPixelColor(n, color);
          	n = n + 8;
        }
    }else if (alpha == "7"){
        int m = j;
        setPixelColor(j-1, color);
        setPixelColor(j-2, color);
        for(int i=0; i<4; i++){
            setPixelColor(j, color);
            j = j + 8;
            if(j == m+16){
                setPixelColor(j-1, color);
                setPixelColor(j+1, color);
            }
   		}
	}
}