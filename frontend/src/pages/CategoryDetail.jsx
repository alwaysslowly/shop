import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CategoryDetail() {
    const { ctgryNo } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/categories/${ctgryNo}`)
            .then((res) => {
                if (!res.ok) throw new Error('카테고리를 찾을 수 없습니다');
                return res.json();
            })
            .then((data) => setCategory(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [ctgryNo]);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>오류: {error}</p>;

    return (
        <div style={{ padding: 24 }}>
            <Link to="/categories">← 목록으로</Link>
            <h1 style={{ marginTop: 16 }}>{category.ctgryNm}</h1>
            <p>카테고리 번호: {category.ctgryNo}</p>
            <p>상위 카테고리: {category.upCtgryNo || '없음'}</p>
            <p>레벨: {category.ctgryLvl}</p>
            <p>정렬 순서: {category.sortOrd}</p>
        </div>
    );
}

export default CategoryDetail;