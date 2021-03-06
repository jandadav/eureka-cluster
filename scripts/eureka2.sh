java -Dserver.port=5002 \
    -Deureka.server.enableSelfPreservation=false \
    -Deureka.instance.hostname=eureka-peer2 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer1:5001/eureka,http://eureka-peer2:5002/eureka,http://eureka-peer3:5003/eureka \
    -Deureka.server.evictionIntervalTimerInMs=5000 \
    -Deureka.client.registerWithEureka=true \
    -Deureka.client.fetchRegistry=true \
    -Deureka.instance.leaseRenewalIntervalInSeconds=5 \
    -Deureka.instance.leaseExpirationDurationInSeconds=10 \
    -jar ../discovery/build/libs/discovery-0.0.1-SNAPSHOT.jar
#    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer2:5002/eureka \
#    -Deureka.client.registerWithEureka=true \
#    -Deureka.client.fetchRegistry=true \
#    -Deureka.client.initialInstanceInfoReplicationIntervalSeconds=5 \
#    -Deureka.client.registryFetchIntervalSeconds=5 \
#    -Deureka.instance.leaseRenewalIntervalInSeconds=5 \
#    -Deureka.instance.leaseExpirationDurationInSeconds=10 \