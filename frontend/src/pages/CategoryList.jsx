import { useEffect, useState } from "react";

function CategoryList() {

    const[categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('/api/categories')
        .then((res) => {
            if (!res.ok) throw new Error('응답 오류: ' + res.status);
            return res.json();
        })
        .then((data) => setCategories(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
        .then((data) => {
            console.log('받은 데이터:', data);
            setCategories(data);
        })
        
        
    
    }, []);
    
    
    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>오류: {error}</p>;

    return <h1>카테고리 목록</h1>;
}

export default CategoryList;