package com.cropconnect.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cropconnect.config.JWTService;
import com.cropconnect.dto.LoginDTO;
import com.cropconnect.dto.LoginResponse;
import com.cropconnect.dto.UserDTO;
import com.cropconnect.entities.User;
import com.cropconnect.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
	private JWTService jwtService;
	
	@Autowired
	private ModelMapper modelMapper;

    @Autowired
    private AuthService authService;

//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
//    	System.out.println("In controller "+ loginDTO.getEmail() +" "+loginDTO.getPassword());
//        UserDTO user = authService.authenticate(loginDTO);
//        if (user != null) {
//            // Ideally, you would generate a JWT or some other token here
//            return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.status(401).body("Invalid credentials");
//        }
//    }
    
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginDTO loginDTO) {
        UserDTO authenticatedUserDTO = authService.authenticate(loginDTO);
        User  authenticatedUser= modelMapper.map(authenticatedUserDTO, User.class);
        System.out.println("IN AUTH CONTROLLER -----:>>> "+authenticatedUser.getPassword() );

        String jwtToken = jwtService.generateToken(authenticatedUser);

//        LoginResponse loginResponse = new LoginResponse().setToken(jwtToken).setExpiresIn(jwtService.getExpirationTime());
        LoginResponse loginResponse = new LoginResponse()
                .setToken(jwtToken)
                .setExpiresIn(jwtService.getExpirationTime())
                .setUser(authenticatedUser); // Set the user details
    

        return ResponseEntity.ok(loginResponse);
    }
    
    
}
