import java.util.List;

public class EvenBug {
    public static void main(String[] args){
List<Integer> listOfNumbers = new LinkedList<>(Arrays.asList( 1, 2, 2, 2, 4, 3, 4 ));
    }
    public static List<Integer> filterOddNumber(List<Integer> listOfNumbers)
    {
        for (int i = 0; i < listOfNumbers.size(); i++)
        {
            int even = (listOfNumbers.get(i) % 2 );
            if (even == 0)
            {
                listOfNumbers.remove(i);
            }
        }
        return listOfNumbers;
    }
}

