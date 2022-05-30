abstract class User
{
private int userid;
private String name;
User() {} 
User(int userid , String name) {
this.userid = userid ;
this.name = name;
}
public abstract float getDiscount(float shoppingAmt);
}

class RegisteredUser extends User
{
    int registrationNo ; 
    float shoppingAmt; 
    RegisteredUser(){}
    RegisteredUser(int userid , String name , float shoppingAmt ){
        super(userid , name);
        this.shoppingAmt = shoppingAmt;
    }
    public float getDiscount(float shoppingAmt){
        if( shoppingAmt < 1000 ){
            return shoppingAmt; 
        }else if ( shoppingAmt > 1000 && shoppingAmt < 5000 ){
            return shoppingAmt - shoppingAmt * 0.05f;
        }else if ( shoppingAmt >= 5000 && shoppingAmt <= 10000 ){
            return shoppingAmt -  shoppingAmt * 0.07f;
        }else{
            return shoppingAmt - shoppingAmt * 0.10f;
        }
    } 

}

// Write your code here...

 // Write your code here...
class PrivilegedUser extends User
{
    String cardType;
    PrivilegedUser() {} 
    PrivilegedUser(int userid , String name, String cardType){
        super(userid , name );
        this.cardType = cardType;
    }

    public float getDiscount(float shoppingAmt){
        if( this.cardType.equals("gold")){
            return shoppingAmt - shoppingAmt * 0.10f;
        }
        if( this.cardType.equals("silver") && shoppingAmt < 5000 ){
            return shoppingAmt - shoppingAmt * 0.03f;
        }else {
            return shoppingAmt - shoppingAmt * 0.05f;
        }
    }

}
public class Program{

public static void main(String[] args) {

try {



// data passed to Registered User constructor in the order: userid, name,

// registration No.

User u1 = new RegisteredUser(19870,"Amit", 20200001);
User u2 = new RegisteredUser(13450,"Vishal", 20200034);
System.out.println("Final Amount for Amit after discount : "+u1.getDiscount(700)); 
System.out.println("Final Amount for Vishal after discount : " +u2.getDiscount(2500));

// data passed to PrivilegedUser constructor in the order: userid, name and

// card Type

User u3 = new PrivilegedUser(14387, "Sadhana", "silver");

User u4 = new PrivilegedUser(16857, "Rahul", "gold"); User u5= new PrivilegedUser(17867, "Meghana", "silver");
 System.out.println("Final Amount for Sadhana after discount :"  + u3.getDiscount(6700));

System.out.println("Final Amount for Rahul after discount :"+u3.getDiscount(6700));

System.out.println("Final Amount for Rahul after discount: "+u4.getDiscount(8000));

System.out.println("Final Amount for Meghana after discount : "+u5.getDiscount (4300));
}
catch(Exception e) { e.printStackTrace(); } ;
}
} 