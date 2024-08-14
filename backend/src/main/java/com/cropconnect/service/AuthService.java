package com.cropconnect.service;

import com.cropconnect.dto.LoginDTO;
import com.cropconnect.dto.UserDTO;

public interface AuthService {

	public UserDTO authenticate(LoginDTO loginDTO);
}
