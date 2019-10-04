import io.restassured.http.Header;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class apiTests {

    private static final String baseUrl = "https://pokeapi.co/api/v2/";
    private static final String cyndaquilResourceID = "pokemon/cyndaquil/";
    private static final int cydaquilsWeight = 79;
    private Header acceptHeader = new Header("accept", "text/json");

    @Test
    public void test() {
        Response response = given().header(acceptHeader).get(baseUrl + cyndaquilResourceID);
        int actualWeight = Integer.parseInt(response.then().extract().path("weight").toString());
        assertEquals(actualWeight, cydaquilsWeight);
    }

}
