package com.cropconnect.service;

import com.cropconnect.dto.AddressDTO;
import com.cropconnect.dto.ApiResponse;
import com.cropconnect.entities.Address;

public interface AddressService {

	ApiResponse updateAddressByMerchantId(Integer merchatId, AddressDTO addressDTO) ;
}


//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//@Service
//public class AddressService {
//
//    @Autowired
//    private AddressRepository addressRepository;
//
//    @Transactional
//    public ApiResponse updateAddress(Integer id, Address updatedAddress) {
//        try {
//            Address address = addressRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Address not found with id: " + id));
//            
//            // Update only the address-specific fields
//            address.setStreet(updatedAddress.getStreet());
//            address.setCity(updatedAddress.getCity());
//            address.setZipCode(updatedAddress.getZipCode());
//            // Other fields as necessary
//
//            addressRepository.save(address);
//
//            return new ApiResponse("Address updated successfully");
//        } catch (Exception e) {
//            // Handle exception
//            return new ApiResponse("Error updating address: " + e.getMessage());
//        }
//    }
//}
