FROM eclipse-temurin:8-jdk-jammy

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN sed -i 's/\r$//' ./mvnw
RUN ./mvnw dependency:resolve

COPY src ./src

EXPOSE 4000

CMD ["./mvnw", "spring-boot:run"]