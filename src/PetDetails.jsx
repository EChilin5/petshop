import React from "react";
import "./PetDetails.css"

const PetDetails = () => {
  return (
    <div className="pet-details">
      <div className="pet-details-header">
        <div>
          <span className="pet-details-class">Classified</span> 
          <span className="pet-details-secret">Top Secret</span>
        </div>
        <div>
          <div>Subject Dossier - Clearance Level Omega</div>
       </div>
      </div>
      <div className="pet-details-banner">
        ⚠ CONFIDENTIAL INFORMATION - AUTHORIZED PERSONNEL ONLY ⚠
      </div>
      <div className="pet-detail-main">
      <div className="pet-detail-container">
        <div className="pet-detail-sv">Surveillance Photo</div>
        <div className="pet-detail-cl">Classified</div>
        <div className="pet-detail-date"> FILE NO: K9-2024-MAX-001</div>
        <img
          src="https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2clMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU2NDEwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="pet dog"
          className="pet-detail-img"
        />
      </div>
      <div className="pet-level-container">
<div className="pet-level">
        <div className="pet-level-header">
          <div className="pet-level-header-level">LEVEL: OMEGA</div>
          <div className="pet-level-header-name">SUBJECT: MAX</div>
          <div className="pet-level-header-location">SEATTLE, WA</div>
        </div>
        <div>
          <div className="pet-level-list">
            <div className="pet-level-list-type">Age</div>
            <div className="pet-level-list-dessc">3 years</div>
          </div>
          <div className="pet-level-list">
            <div className="pet-level-list-type">SPECIES/BREED</div>
            <div className="pet-level-list-desc">GOLDEN RETRIEVER</div>
          </div>
          <div className="pet-level-list">
            <div className="pet-level-list-type">GENDER</div>
            <div className="pet-level-list-desc">MALE</div>
          </div>
          <div className="pet-level-list">
            <div className="pet-level-list-type">SIZE/WEIGHT</div>
            <div className="pet-level-list-desc">LARGE (60-75 LBS)</div>
          </div>
          <div className="pet-level-list">
            <div className="pet-level-list-type">MARKINGS</div>
            <div className="pet-level-list-desc">GOLDEN</div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className="pet-intelligence">
        <div className="pet-intelligence-title">PET INTELLIGENCE</div>
        <div className="pet-intelligence-cell">
          <span className="pet-intelligence-cell-title">[FIELD OBSERVATION]</span> Subject designation "MAX" exhibits
          exceptional loyalty and high energy levels. Operatives report subject
          is highly trainable and responds to basic commands including "sit",
          "stay", and "come". Socialization assessment indicates strong
          compatibility with junior agents (children) and fellow canine
          operatives.
        </div>
        <div className="pet-intelligence-cell">
          <span className="pet-intelligence-cell-title">[BEHAVIORAL ANALYSIS]</span> Subject demonstrates preference for
          outdoor operations and requires substantial daily physical activity.
          Intelligence suggests optimal performance in environments with secure
          perimeter (fenced yard). Subject has completed house and crate
          training protocols successfully.
        </div>
        <div className="pet-intelligence-cell">
          <span className="pet-intelligence-cell-title">[MISSION OBJECTIVE]</span> Seeking experienced handler capable of
          providing sustained engagement, training reinforcement, and emotional
          support. Subject requires family unit committed to long-term
          partnership.
        </div>
      </div>
      <div className="pet-behavior">
        <div className="pet-behavior-title">BEHAVIORAL TRAITS ANALYSIS</div>
        <div className="pet-behavior-list">
          <div className="pet-behavior-item">Friendly</div>
          <div className="pet-behavior-item">High Energy</div>
          <div className="pet-behavior-item">Playful</div>
          <div className="pet-behavior-item">Child-safe</div>
          <div className="pet-behavior-item">Loyal</div>
        </div>
      </div>
      <div className="pet-med">
        <div className="pet-med-title">MEDICAL RECORDS - RESTRICTED</div>
        <div className="pet-med-list">
          <div className="pet-med-item">✔ Vaccinated</div>
          <div className="pet-med-item">✔ Neutered</div>
          <div className="pet-med-item">✔ Microchipped</div>
          <div className="pet-med-item">✔ Health Cleared</div>
        </div>
      </div>
      <div className="pet-requirements">
        <div className="pet-requirement-title">HANDLER REQUIREMENTS - MANDATORY</div>
        <div className="pet-requirement-item">► Secure perimeter with fencing (RECOMMENDED)</div>
        <div className="pet-requirement-item">► Prior large-breed canine experience (PREFERRED)</div>
        <div className="pet-requirement-item">► Daily physical training commitment (REQUIRED)</div>
      </div>
    {/*  */}
      
      <div className="pet-handler">Submit Handler Application</div>
      <div className="pet-classified">THIS DOCUMENT IS CLASSIFIED UNAUTHORIZED DISCLOSURE PROHIBITED</div>
      <div className="pet-end">END OF CLASSIFIED DOCUMENT - DESTROY AFTER READING</div>
    </div>
  );
};

export default PetDetails;
