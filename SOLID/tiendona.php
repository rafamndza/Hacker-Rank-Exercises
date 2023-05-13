<?php

/**En El Salvador, existe una empresa llamada "LA TIENDONA" que se dedica a la venta de productos diversos en linea.
la empresa esta experimentando un crecimiento rapido y necesita desarrollar un sistema de inventario para gestionar sus productos de manera eficiente.


Asegúrate de dividir las responsabilidades de manera adecuada, utilizar herencia y/o interfaces cuando sea necesario y diseñar el sistema de forma flexible para permitir 
futuras extensiones sin modificar el código existente. */


interface GestionDeStock {
  public function obtenerCantidadExistente();
  public function incrementarCantidadExistente($cantidad);
  public function decrementarCantidadExistente($cantidad);
}

interface GestionDePedidos {
  public function recibirPedido($cantidad);
  public function cancelarPedido($cantidad);
}

abstract class Producto implements GestionDeStock {
  protected $nombre;
  protected $descripcion;
  protected $precio;
  protected $cantidadExistente;

  public function __construct($nombre, $descripcion, $precio, $cantidadExistente) {
    $this->nombre = $nombre;
    $this->descripcion = $descripcion;
    $this->precio = $precio;
    $this->cantidadExistente = $cantidadExistente;
  }

  public function obtenerCantidadExistente() {
    return $this->cantidadExistente;
  }

  public function incrementarCantidadExistente($cantidad) {
    $this->cantidadExistente += $cantidad;
  }

  public function decrementarCantidadExistente($cantidad) {
    $this->cantidadExistente -= $cantidad;
  }
}

class ProductoFisico extends Producto {
  protected $peso;

  public function __construct($nombre, $descripcion, $precio, $cantidadExistente, $peso) {
    parent::__construct($nombre, $descripcion, $precio, $cantidadExistente);
    $this->peso = $peso;
  }
}

class ProductoDigital extends Producto {
  protected $linkDescarga;

  public function __construct($nombre, $descripcion, $precio, $cantidadExistente, $linkDescarga) {
    parent::__construct($nombre, $descripcion, $precio, $cantidadExistente);
    $this->linkDescarga = $linkDescarga;
  }
}

class Inventario {
  protected $productos;

  public function __construct() {
    $this->productos = array();
  }

  public function agregarProducto(Producto $producto) {
    $this->productos[] = $producto;
  }

  public function buscarProducto($nombre) {
    foreach ($this->productos as $producto) {
      if ($producto->nombre == $nombre) {
        return $producto;
      }
    }
    return null;
  }
}

class Notificador {
  protected $inventario;

  public function __construct(Inventario $inventario) {
    $this->inventario = $inventario;
  }

  public function notificarBajoInventario($cantidadMinima) {
    foreach ($this->inventario->productos as $producto) {
      if ($producto->cantidadExistente < $cantidadMinima) {
        echo "El producto ".$producto->nombre." tiene una cantidad existente de ".$producto->cantidadExistente." y es necesario reponer el inventario.\n";
      }
    }
  }
}



?>