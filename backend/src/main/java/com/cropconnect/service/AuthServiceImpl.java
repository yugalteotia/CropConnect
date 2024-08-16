package com.cropconnect.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.LoginDTO;
import com.cropconnect.dto.UserDTO;
import com.cropconnect.entities.User;
import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.repository.UserRepository;

@Service
@Transactional
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public UserDTO authenticate(LoginDTO loginDTO) {
		 System.out.println(loginDTO.getEmail());
		 System.out.println(loginDTO.getPassword());
		  User user = userRepository.findByEmail(loginDTO.getEmail())
				  .orElseThrow(()-> new ResourceNotFoundException("User not found"));
	        if (user != null && loginDTO.getPassword().equals(user.getPassword())) {
	            return modelMapper.map(user, UserDTO.class);
	        }
	      return null;
	    
	}

}
