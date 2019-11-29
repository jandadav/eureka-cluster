java -Dserver.port=5001 \
    -Deureka.instance.hostname=eureka-peer1 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer2:5002/eureka \
    -jar ../discovery/build/libs/discovery-0.0.1-SNAPSHOT.jar &
java -Dserver.port=5002 \
    -Deureka.instance.hostname=eureka-peer2 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer3:5003/eureka \
    -jar ../discovery/build/libs/discovery-0.0.1-SNAPSHOT.jar &
java -Dserver.port=5003 \
    -Deureka.instance.hostname=eureka-peer3 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer1:5001/eureka \
    -jar ../discovery/build/libs/discovery-0.0.1-SNAPSHOT.jar &

java -Dspring.application.name=service1 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer2:5002/eureka \
    -jar ../service/build/libs/service-0.0.1-SNAPSHOT.jar &
java -Dspring.application.name=service2 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer2:5002/eureka \
    -jar ../service/build/libs/service-0.0.1-SNAPSHOT.jar &
java -Dspring.application.name=service3 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer2:5002/eureka \
    -jar ../service/build/libs/service-0.0.1-SNAPSHOT.jar &
java -Dspring.application.name=service4 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer2:5002/eureka \
    -jar ../service/build/libs/service-0.0.1-SNAPSHOT.jar &
java -Dspring.application.name=service5 \
    -Deureka.client.serviceUrl.defaultZone=http://eureka-peer2:5002/eureka \
    -jar ../service/build/libs/service-0.0.1-SNAPSHOT.jar