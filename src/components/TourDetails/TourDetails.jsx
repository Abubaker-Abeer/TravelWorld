import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { auth, db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./TourDetails.css";
import user_img from "../../assets/images/user.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import BookingForm from "../Booking/Booking";
import { onAuthStateChanged } from "firebase/auth";

export default function TourDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { img, country, landmark, price, people, description } = location.state;

  const [loggedUser, setLoggedUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [editingComment, setEditingComment] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [starRating, setStarRating] = useState(0);
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  // ✅ التحقق من حالة المستخدم الحقيقية
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && auth.currentUser) {
        setLoggedUser(user);
      } else {
        setLoggedUser(null);
      }
      setIsLoadingUser(false);
    });

    return () => unsubscribe();
  }, []);

  const commentsCollectionRef = collection(db, `comments-${landmark}`);

  const fetchComments = async () => {
    try {
      const data = await getDocs(commentsCollectionRef);
      const comments = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setCommentsList(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser || !loggedUser) {
      setShowLoginAlert(true);
      return;
    }

    if (comment.trim()) {
      const newComment = {
        userName: loggedUser.displayName || loggedUser.email || "User",
        userEmail: loggedUser.email || "No Email",
        userPhoto: loggedUser.photoURL || user_img,
        comment,
        rating: starRating,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
      };

      try {
        await addDoc(commentsCollectionRef, newComment);
        await fetchComments();
        setComment("");
        setStarRating(0);
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  const handleDeleteComment = (commentId) => {
    setDeleteModal(true);
    setCommentToDelete(commentId);
  };

  const confirmDelete = async () => {
    if (!commentToDelete) return;

    try {
      const commentDoc = doc(db, `comments-${landmark}`, commentToDelete);
      await deleteDoc(commentDoc);
      const updatedComments = commentsList.filter((c) => c.id !== commentToDelete);
      setCommentsList(updatedComments);
      setDeleteModal(false);
      setCommentToDelete(null);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleLoginRedirect = () => navigate("/login");

  useEffect(() => {
    fetchComments();
  }, [landmark]);

  const userEmail = loggedUser?.email || "No Email";
  const totalRatings = commentsList.reduce((total, c) => total + c.rating, 0);
  const averageRating = totalRatings / commentsList.length || 0;

  if (isLoadingUser) return null;

  return (
    <div className="tour-details">
      <Container>
        {showLoginAlert && (
          <Modal isOpen={showLoginAlert} toggle={() => setShowLoginAlert(false)}>
            <ModalHeader toggle={() => setShowLoginAlert(false)}>Login Required</ModalHeader>
            <ModalBody>You need to log in to leave a comment.</ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={() => setShowLoginAlert(false)}>Close</Button>
              <Button color="primary" onClick={handleLoginRedirect}>Go to Login</Button>
            </ModalFooter>
          </Modal>
        )}

        <Row>
          <Col lg="9">
            <img src={img} alt={country} className="tour-details-image" />
          </Col>

          <Col className="tour-details-r" lg="3">
            <BookingForm price={price} averageRating={averageRating} country={country} />
          </Col>

          <Col className="tour-details-b p-3" lg="8">
            <h1>{country} - {landmark}</h1>
            <div className="rating-stars d-flex align-items-center gap-5">
              <span style={{ color: "orange" }}>
                {"★".repeat(Math.floor(averageRating))}
                {"☆".repeat(5 - Math.floor(averageRating))}
                <small style={{ color: "#666" }}>{averageRating.toFixed(1)}</small>
              </span>
              <p><i className="ri-account-pin-circle-fill"></i> Somewhere in {country}</p>
            </div>
            <div className="d-flex align-items-center gap-5">
              <p><i className="ri-price-tag-2-line"></i> {price} / per person</p>
              <p><i className="ri-team-line"></i> {people} people</p>
            </div>

            <h5>Description</h5>
            <p>{description}</p>
          </Col>

          <Col className="coment" lg="8">
            <h4>Reviews ({commentsList.length})</h4>

            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= starRating ? "filled" : ""}`}
                  onClick={() => setStarRating(star)}
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    color: star <= starRating ? "gold" : "gray",
                  }}
                >
                  ☆
                </span>
              ))}
            </div>

            <Form onSubmit={handleCommentSubmit}>
              <FormGroup>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows="3"
                  className="form-control"
                  placeholder="Write a comment"
                />
              </FormGroup>
              <Button type="submit" color="primary">
                {editingComment ? "Update Comment" : "Submit Comment"}
              </Button>
            </Form>

            <div className="reviews-list">
              {commentsList.length > 0 ? (
                commentsList.map((c, index) => (
                  <div key={index} className="review-item">
                    <div className="review-header d-flex align-items-center">
                      <img src={c.userPhoto || user_img} alt={c.userName} className="review-user-photo" />
                      <div className="text">
                        <h6 className="review-user-name">{c.userName}</h6>
                        <p className="review-date">{c.date}</p>
                        <p style={{ color: "orange" }}>
                          {"★".repeat(c.rating)}{"☆".repeat(5 - c.rating)}
                        </p>
                        <h5 className="review-comment">{c.comment}</h5>
                      </div>
                    </div>
                    {c.userEmail === userEmail && (
                      <div className="review-actions">
                        <i onClick={() => handleDeleteComment(c.id)}>
                          <RiDeleteBin6Line />
                        </i>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No reviews yet. Be the first to leave one!</p>
              )}
            </div>
          </Col>
        </Row>

        <Modal isOpen={deleteModal} toggle={() => setDeleteModal(false)}>
          <ModalHeader toggle={() => setDeleteModal(false)}>Confirm Delete</ModalHeader>
          <ModalBody>Are you sure you want to delete this comment?</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setDeleteModal(false)}>Cancel</Button>
            <Button color="danger" onClick={confirmDelete}>Delete</Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
}
