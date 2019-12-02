## Eureka Cluster

for testing Eureka things

### Setup:

this needs entries in hosts (C:\WINDOWS\System32\drivers\etc\hosts on Windows):

```
127.0.0.1 eureka-peer1
127.0.0.1 eureka-peer2
127.0.0.1 eureka-peer3
```

references for configuring:

https://thepracticaldeveloper.com/2018/03/18/spring-boot-service-discovery-eureka/#Eureka_Registry_Cluster_via_enabling_Peer_Awareness
https://cloud.spring.io/spring-cloud-netflix/multi/multi_spring-cloud-eureka-server.html

- GOOD https://blog.asarkar.org/technical/netflix-eureka/
https://medium.com/@fahimfarookme/the-mystery-of-eureka-self-preservation-c7aa0ed1b799

### interesting Eureka configuration
- eviction-interval-timer-in-ms: 1000

```If registerWithEureka is true, an instance registers with a Eureka server using a given URL; then onwards, it sends heartbeats every 30s (configurable by eureka.instance.leaseRenewalIntervalInSeconds). If the server doesn’t receive a heartbeat, it waits 90s (configurable by eureka.instance.leaseExpirationDurationInSeconds) before removing the instance from registry and there by disallowing traffic to that instance. Sending heartbeat is an asynchronous task; if the operation fails, it backs off exponentially by a factor of 2 until a maximum delay of eureka.instance.leaseRenewalIntervalInSeconds * eureka.client.heartbeatExecutorExponentialBackOffBound is reached. There is no limit to the number of retries for registering with Eureka.```


### actual configuration achieved