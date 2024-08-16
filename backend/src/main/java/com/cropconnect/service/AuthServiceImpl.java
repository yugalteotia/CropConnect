package com.cropconnect.service;

import com.cropconnect.dto.LoginDTO;
import com.cropconnect.dto.UserDTO;
import com.cropconnect.entities.User;
import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private  PasswordEncoder passwordEncoder;
	
	@Autowired
	private  AuthenticationManager authenticationManager;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public UserDTO authenticate(LoginDTO loginDTO) {

		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword()));
		
		  User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()-> new ResourceNotFoundException("User not found"));

	            return modelMapper.map(user, UserDTO.class);

	    
	}

}
