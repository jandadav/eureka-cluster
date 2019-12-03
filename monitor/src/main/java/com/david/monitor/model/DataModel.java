package com.david.monitor.model;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class DataModel {

    private List<String> eureka1Apps;
    private List<String> eureka2Apps;
    private List<String> eureka3Apps;

    private List<String> service1Cache;
    private List<String> service2Cache;
    private List<String> service3Cache;
    private List<String> service4Cache;
    private List<String> service5Cache;
}
