java -Dserver.port=5003 \
    -Deureka.server.enableSelfPreservation=false \
    -Deureka.instance.hostname=eureka-peer3 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer1:5001/eureka,http://eureka-peer2:5002/eureka,http://eureka-peer3:5003/eureka \
    -jar ../discovery/build/libs/discovery-0.0.1-SNAPSHOT.jar