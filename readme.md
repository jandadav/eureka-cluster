## Eureka Cluster

for testing Eureka things

### Setup:

this needs entries in hosts (C:\WINDOWS\System32\drivers\etc\hosts on Windows):

_for eureka replication to work, all eureka instaces must be running on different hosts_

```
127.0.0.1 eureka-peer1
127.0.0.1 eureka-peer2
127.0.0.1 eureka-peer3
```

### Running

use scripts provided in `scripts/` folder to start individual services.
You can use the monitor module to run a UI that shows active services and their caches to monitor the state of the cluster.
The monitor uses 
- /eureka/apps endpoint of discovery services for discovered services
- /actuator/health discoverycomposite part of the response for service cache



references for configuring:

https://thepracticaldeveloper.com/2018/03/18/spring-boot-service-discovery-eureka/#Eureka_Registry_Cluster_via_enabling_Peer_Awareness
https://cloud.spring.io/spring-cloud-netflix/multi/multi_spring-cloud-eureka-server.html

- GOOD https://blog.asarkar.org/technical/netflix-eureka/
https://medium.com/@fahimfarookme/the-mystery-of-eureka-self-preservation-c7aa0ed1b799

### interesting Eureka configuration
- eviction-interval-timer-in-ms: 1000

```If registerWithEureka is true, an instance registers with a Eureka server using a given URL; then onwards, it sends heartbeats every 30s (configurable by eureka.instance.leaseRenewalIntervalInSeconds). If the server doesn’t receive a heartbeat, it waits 90s (configurable by eureka.instance.leaseExpirationDurationInSeconds) before removing the instance from registry and there by disallowing traffic to that instance. Sending heartbeat is an asynchronous task; if the operation fails, it backs off exponentially by a factor of 2 until a maximum delay of eureka.instance.leaseRenewalIntervalInSeconds * eureka.client.heartbeatExecutorExponentialBackOffBound is reached. There is no limit to the number of retries for registering with Eureka.```


### actual configuration achieved