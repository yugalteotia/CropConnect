package com.cropconnect.entities;

<<<<<<< HEAD
=======
import javax.persistence.Column;
>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
<<<<<<< HEAD
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
=======
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb
import lombok.Setter;

@Getter
@Setter
<<<<<<< HEAD
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name ="cart_item")
public class CartItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartItemId;
	
	@OneToOne
	@JoinColumn(name = "crop_id")
	private Crop crop;
	
	private int quantity;
	
	private int totalPrice;
	
//	mapping cart
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cart_id")
	private Cart cart;
	
=======
@Entity
@Table(name = "cart_item")
public class CartItem extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_item_id", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "crop_id", nullable = false)
    private Crop  crop;

    @NotNull
    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "cart_id", nullable = false)
    private Cart cart;
>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb
}
