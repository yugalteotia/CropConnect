package com.cropconnect;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean // equivalent to <bean id ..../> in xml file
	public ModelMapper mapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT)
				.setPropertyCondition(Conditions.isNotNull());
		
//		 modelMapper.addMappings(new PropertyMap<Crop, CropDTO>() {
//	            @Override
//	            protected void configure() {
//	                map().set(source.getCategory().getId()); // Map category to categoryId
//	                map().setFarmerId(source.getFarmer().getId()); // Map farmer to farmerId
//	            }
//	        });
		return modelMapper;
	}

}
