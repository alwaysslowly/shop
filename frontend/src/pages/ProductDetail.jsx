import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { prdNo } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products/${prdNo}`)
      .then((res) => {
        if (!res.ok) throw new Error('상품을 찾을 수 없습니다');
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [prdNo]);

  if (loading) return <p>불러오는 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <div style={{ padding: 24 }}>
      <Link to="/">← 목록으로</Link>

      <h1 style={{ marginTop: 16 }}>{product.prdNm}</h1>

      <p style={{ color: '#888', textDecoration: 'line-through' }}>
        {product.orgnlPrc.toLocaleString()}원
      </p>
      <p style={{ fontSize: 24, fontWeight: 'bold' }}>
        {product.salePrc.toLocaleString()}원
      </p>

      <div style={{ marginTop: 24, borderTop: '1px solid #eee', paddingTop: 24 }}>
        <h3>상품 설명</h3>
        <p>{product.prdDesc || '등록된 설명이 없습니다.'}</p>
      </div>
    </div>
  );
}

export default ProductDetail;