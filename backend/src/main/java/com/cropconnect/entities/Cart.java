package com.cropconnect.entities;

<<<<<<< HEAD
import lombok.AllArgsConstructor;
=======
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

<<<<<<< HEAD
import javax.persistence.*;
import javax.validation.constraints.NotNull;
//import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
=======
>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb

@Entity
@Getter
@Setter
<<<<<<< HEAD
@AllArgsConstructor
@NoArgsConstructor
@Entity
=======
@Table(name = "cart")
>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb
public class Cart extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id", nullable = false)
    private Integer id;

<<<<<<< HEAD
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "crop_id", nullable = false)
    private Crop crop;

//    @NotNull
//    @Column(name = "quantity", nullable = false)
//    private Integer quantity;
=======
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartItem> items;
>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "merchant_id", nullable = false)
    private Merchant merchant;
    
<<<<<<< HEAD
    

//    mapping cartItem
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<CartItem> items = new ArrayList<>();

}
=======
  //helper methods - to add/remove a cart item
  	public void addCartItem(CartItem item)
  	{
  		items.add(item);//Cart --> CartItem
  		item.setCart(this); //CartItem --> Cart
  	}
  	public void removeCartItem(CartItem item)
  	{
  		items.remove(item);
  		item.setCart(null);
  	}
}

>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb
