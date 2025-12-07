import React, { useState, useEffect, useRef, useCallback } from "react";
import MainLayout from "../Layouts/MainLayout";
import PostCard from "../Components/PostCard";
import { fetchFeedPosts } from "../api/posts";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);
  const fetchedPages = useRef(new Set());
  const location = useLocation();
  const [scrollTarget, setScrollTarget] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToId = params.get("scrollTo");
    if (scrollToId) {
      setScrollTarget(scrollToId);
    }
  }, [location]);

  useEffect(() => {
    if (!scrollTarget) return;

    const interval = setInterval(() => {
      const element = document.getElementById(`post-${scrollTarget}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        clearInterval(interval);
        setScrollTarget(null);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [scrollTarget]);

  const fetchFeed = useCallback(async () => {
    if (loading || !hasMore || fetchedPages.current.has(page)) {
      setLoading(true);
      return;
    }

    try {
      const data = await fetchFeedPosts(page, size);

      if (Array.isArray(data) && data.length > 0) {
        setPostList((prev) => {
          const newPosts = data.filter((d) => !prev.some((p) => p.id === d.id));
          return [...prev, ...newPosts];
        });
        fetchedPages.current.add(page);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  }, [page, size, loading, hasMore]);

  useEffect(() => {
    fetchFeed();
  }, [page, fetchFeed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const currentLoader = loader.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, loading]);

  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="flex flex-col w-80 md:w-[340px] lg:w-[440px] gap-4 ">
          {postList.map((post) => (
            <div key={post.id} id={`post-${post.id}`}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {hasMore && (
        <div ref={loader} className="text-center p-4 text-gray-500">
          {loading ? "Scroll to load more" : "Loading..."}
        </div>
      )}
    </MainLayout>
  );
};

export default HomePage;
