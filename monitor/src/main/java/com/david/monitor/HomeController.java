package com.david.monitor;

import com.david.monitor.model.Data;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    private String text = "";
    private Data data;

    @GetMapping("/api/v1/data")
    public Data dataApiEndpoint(Model model) {

        //data = new Data().builder().message("Data");


        return data;
    }

    @Scheduled(fixedRate = 2000)
    private void tick() {

    }

}
