// src/components/SceneLayout.jsx

import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

// Bu fonksiyon, tek tek modelleri sahneye eklemek için kullanılır
function Asset({ url, position, rotation, scale = 1, name }) {
  // useGLTF yerine basit bir GLTFLoader kullanmak daha verimli olabilir
  // Ancak şimdilik useGLTF ile devam edelim
  const { scene } = useGLTF(url);

  // Modeli clone'layarak birden fazla yerde kullanabilirsiniz (önerilir)
  return (
    <primitive
      object={scene.clone()} // Modelin kopyasını kullan
      position={position}
      rotation={rotation}
      scale={scale}
      name={name}
    />
  );
}

// Ana Dairesel Alanı Oluşturma Bileşeni
export function SceneLayout(props) {
  // Karakterinizin yürüdüğü zemin (Basit bir silindir veya daire olabilir)
  // Eğer indirdiğiniz bir zemin modeliniz yoksa bu geçici çözümdür:
  const Ground = () => (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
      <cylinderGeometry args={[5, 5, 0.2, 32]} /> {/* 5 birim yarıçaplı dairesel zemin */}
      <meshStandardMaterial color="#88C088" /> {/* Yeşil çimen rengi */}
    </mesh>
  );

  // --- ÖRNEK MODEL YERLEŞİMİ (Sizin Parçalarınızla Değiştirilecek) ---
  return (
    // TÜM ŞEHRİ bu GROUP içine alacağız. Şehri döndürürken sadece bu Group'u döndüreceğiz.
    <group {...props}>
      {/* Zemin */}
      <Ground />

      {/* 1. KARIYET DURAĞI: BAŞLANGIÇ NOKTASI (Merkeze yakın) */}
      <Asset
        url="/Tree_01.glb" 
        position={[0, 0, 2]} 
        scale={1.5}
        name="BaslangicAgaci"
      />
      
      {/* 2. KARİYER DURAĞI: İLK İŞ YERİ (Daha dışta) */}
      <Asset
        url="/House_A.glb"
        position={[3, 0, -1]} 
        rotation={[0, THREE.MathUtils.degToRad(45), 0]} // Evi döndür
        scale={2}
        name="IlkIs"
      />
      
      {/* 3. YOL/PATİKA (Bu parçalar karakterin yürüyeceği dairesel yolu oluşturacak) */}
      <Asset
        url="/Road_Piece.glb" // Low poly bir yol parçası
        position={[4, -0.05, 0]} // Zeminden az yukarıda
        rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        scale={0.5}
        name="YolParcasi1"
      />
      
      {/* ... ve daha fazla yerleşim! */}
    </group>
  );
}

// Preload'u tüm assetler için teker teker yapmalısınız
useGLTF.preload('/Tree_01.glb');
useGLTF.preload('/House_A.glb');
useGLTF.preload('/Road_Piece.glb');