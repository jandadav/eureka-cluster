java -Dspring.application.name=service4 \
    -Dserver.port=6004 \
    -Deureka.instance.leaseRenewalIntervalInSeconds=5 \
    -Deureka.instance.leaseExpirationDurationInSeconds=10 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer2:5002/eureka \
    -jar ../service/build/libs/service-0.0.1-SNAPSHOT.jar