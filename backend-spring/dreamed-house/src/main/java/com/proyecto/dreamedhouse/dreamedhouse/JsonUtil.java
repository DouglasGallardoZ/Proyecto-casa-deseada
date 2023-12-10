package com.proyecto.dreamedhouse.dreamedhouse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonUtil {

    public static String jsonResponse(String mensaje){
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = "";
        try {
            jsonResponse = objectMapper.writeValueAsString(mensaje);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return jsonResponse;
    }
}
