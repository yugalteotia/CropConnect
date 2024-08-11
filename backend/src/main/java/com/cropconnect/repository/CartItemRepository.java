package com.cropconnect.repository;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb
import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Integer> {
	
<<<<<<< HEAD
=======
	    List<CartItem> findByCartId(Integer cartId);
>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb
}
