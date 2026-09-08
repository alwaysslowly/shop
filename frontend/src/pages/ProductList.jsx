import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => {
        if (!res.ok) throw new Error('응답 오류: ' + res.status);
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>불러오는 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <div style={{ padding: 24 }}>
      <h1>상품 목록</h1>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {products.map((p) => (
          <Link
            key={p.prdNo}
            to={`/products/${p.prdNo}`}
            style={{
              border: '1px solid #ddd',
              borderRadius: 8,
              padding: 16,
              width: 200,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <h3>{p.prdNm}</h3>
            <p style={{ color: '#888', textDecoration: 'line-through' }}>
              {p.orgnlPrc.toLocaleString()}원
            </p>
            <p style={{ fontWeight: 'bold' }}>{p.salePrc.toLocaleString()}원</p>
          </Link>
        ))}
      </div>
            <a href="/api/products/excel" style={{ 
        display: 'inline-block', 
        marginBottom: 16,
        padding: '8px 16px',
        border: '1px solid #ccc',
        borderRadius: 4,
        textDecoration: 'none',
        color: 'inherit'
        }}>
        엑셀 다운로드
        </a>
    </div>
  );
}

export default ProductList;