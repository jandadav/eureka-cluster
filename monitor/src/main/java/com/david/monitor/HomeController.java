package com.david.monitor;

import com.david.monitor.model.DataModel;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.ConnectException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
public class HomeController {

    private String text = "";
    private DataModel dataModel = DataModel.builder().build();
    private final RestTemplate restTemplate = new RestTemplate();
    private ObjectMapper mapper = new ObjectMapper();

    @GetMapping("/api/v1/data")
    public DataModel dataApiEndpoint(Model model) {

        return dataModel;
    }

    @Scheduled(fixedRate = 1000)
    private void tick() {

        dataModel.setEureka1Apps(getEurekaApps("http://localhost:5001/eureka/apps"));
        dataModel.setEureka2Apps(getEurekaApps("http://localhost:5002/eureka/apps"));
        dataModel.setEureka3Apps(getEurekaApps("http://localhost:5003/eureka/apps"));

        dataModel.setService1Cache(getDiscoveryComposite("http://localhost:6001/actuator/health"));
        dataModel.setService2Cache(getDiscoveryComposite("http://localhost:6002/actuator/health"));
        dataModel.setService3Cache(getDiscoveryComposite("http://localhost:6003/actuator/health"));
        dataModel.setService4Cache(getDiscoveryComposite("http://localhost:6004/actuator/health"));
        dataModel.setService5Cache(getDiscoveryComposite("http://localhost:6005/actuator/health"));

        //getDiscoveryComposite("http://localhost:6001/actuator/health");
        //getEurekaApps("http://localhost:5002/eureka/apps");

    }

    private List<String> getEurekaApps(String url) {
        try {
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

            if (response.getStatusCode().equals(HttpStatus.OK)) {

                List<String> applicationList = new ArrayList<>();

                JsonNode root = mapper.readTree(response.getBody());
                JsonNode applications = root.at("/applications").get("application");

                if (applications.isArray()) {
                    for (JsonNode arrNode : applications) {
                        applicationList.add(arrNode.get("name").asText());
                    }
                }

//                System.out.println(response.getBody());
//                System.out.println(applicationList);

                return applicationList;

            }
        } catch (RestClientException | IOException e) {
            if (e instanceof ResourceAccessException) {
                System.out.println("Connection refused");
            } else {
                e.printStackTrace();
            }

        }
        return null;
    }

    private List<String> getDiscoveryComposite(String url) {
        try {
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

            if (response.getStatusCode().equals(HttpStatus.OK)) {

                List<String> applicationList = new ArrayList<>();
                JsonNode root = mapper.readTree(response.getBody());
                JsonNode discoveryComposite = root.at("/details/discoveryComposite");
                JsonNode services = discoveryComposite.at("/details/discoveryClient/details/services");

//                System.out.println(response.getBody());
//                System.out.println(discoveryComposite.toString());
//                System.out.println(services.toString());

                if (services.isArray()) {
                    for (JsonNode arrNode : services) {
                        applicationList.add(arrNode.asText());
                    }
                }

                return applicationList;
            }
        } catch (RestClientException | IOException e) {
            if (e instanceof ResourceAccessException) {
                System.out.println("Connection refused");
            } else {
                e.printStackTrace();
            }

        }
        return null;
    }

}
