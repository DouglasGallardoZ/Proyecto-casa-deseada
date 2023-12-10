package com.proyecto.dreamedhouse.dreamedhouse.auth;


import com.proyecto.dreamedhouse.dreamedhouse.user.User;

/**
 * Class {@code SignInResponse} models the SignIn response data for authentication.
 */
public class SignInResponse {

    /**
     * Property {@code Token} represents the Token for authentication.
     */
    private String token;

    /**
     * Property {@code UserAuthenticated} represents the User authenticated.
     */
    private User userAuthenticated;

    /**
     * Obtén el token.
     *
     * @return El token.
     */
    public String getToken() {
        return token;
    }

    /**
     * Establece el token.
     *
     * @param token El token a establecer.
     */
    public void setToken(String token) {
        this.token = token;
    }

    /**
     * Obtén el usuario autenticado.
     *
     * @return El usuario autenticado.
     */
    public User getUserAuthenticated() {
        return userAuthenticated;
    }

    /**
     * Establece el usuario autenticado.
     *
     * @param userAuthenticated El usuario autenticado a establecer.
     */
    public void setUserAuthenticated(User userAuthenticated) {
        this.userAuthenticated = userAuthenticated;
    }
}
