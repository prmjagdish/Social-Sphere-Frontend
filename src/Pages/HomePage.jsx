import React, { useState, useEffect, useRef, useCallback } from "react";
import MainLayout from "../Layouts/MainLayout";
import PostCard from "../Components/PostCard";
import axios from "axios";

const HomePage = () => {
  const [postList, setPostList] = useState([]); // store posts
  const [page, setPage] = useState(0); // current page
  const [size] = useState(10); // page size
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loader = useRef(null);
  const fetchedPages = useRef(new Set()); // track fetched pages

  // fetch posts from backend
  const fetchFeed = useCallback(async () => {
    if (loading || !hasMore || fetchedPages.current.has(page)) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("token"); // JWT token
      const { data } = await axios.get(
        `https://social-sphere-backend-cnxx.onrender.com/api/posts/feed?page=${page}&size=${size}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (Array.isArray(data) && data.length > 0) {
        // deduplicate by id
        setPostList(prev => {
          const newPosts = data.filter(d => !prev.some(p => p.id === d.id));
          return [...prev, ...newPosts];
        });
        fetchedPages.current.add(page); // mark page as fetched
      } else {
        setHasMore(false); // no more posts
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  }, [page, size, loading, hasMore]);

  // fetch posts when page changes
  useEffect(() => {
    fetchFeed();
  }, [page, fetchFeed]);

  // infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const currentLoader = loader.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [hasMore, loading]);

  // debug: log updated post list
  useEffect(() => {
    console.log("Updated postList:", postList);
  }, [postList]);

  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        {postList.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* loader div for infinite scroll */}
      {hasMore && (
        <div ref={loader} className="text-center p-4 text-gray-500">
          {loading ? "Loading..." : "Scroll to load more"}
        </div>
      )}
    </MainLayout>
  );
};

export default HomePage;
