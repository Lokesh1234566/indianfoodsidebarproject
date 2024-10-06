/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Thiamine = () => {
  return (
    <div className="p-2 md:h-[91vh] flex flex-col overflow-y-scroll">
      <h1>Thiamine (Vitamin B1): Uses, Deficiency Effects, and Toxicity</h1>

      <div className="section">
        <h2>Uses of Thiamine in the Human Body</h2>
        <ul>
          <li>
            <strong>Energy Metabolism:</strong> Thiamine acts as a coenzyme in
            converting carbohydrates into glucose, which the body uses for
            energy.
          </li>
          <li>
            <strong>Nervous System Health:</strong> Supports the production of
            acetylcholine, a neurotransmitter critical for memory and muscle
            contraction.
          </li>
          <li>
            <strong>Muscle Function:</strong> Thiamine helps ensure proper
            muscle contraction, including the heart muscle.
          </li>
          <li>
            <strong>Synthesis of Neurotransmitters:</strong> Aids in the
            production of neurotransmitters like serotonin and GABA for mood
            regulation.
          </li>
          <li>
            <strong>Antioxidant Functions:</strong> Plays a role in protecting
            cells from oxidative stress and tissue damage.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Effects of Thiamine Deficiency</h2>
        <h3>1. Beriberi</h3>
        <ul>
          <li>
            <strong>Wet Beriberi:</strong> Affects the cardiovascular system,
            causing shortness of breath, rapid heart rate, and swelling (edema)
            in the legs. Severe cases may lead to heart failure.
          </li>
          <li>
            <strong>Dry Beriberi:</strong> Affects the nervous system, causing
            peripheral neuropathy (numbness or tingling in hands and feet),
            muscle weakness, and difficulty walking.
          </li>
        </ul>

        <h3>2. Wernicke-Korsakoff Syndrome</h3>
        <ul>
          <li>
            <strong>Wernicke's Encephalopathy:</strong> Causes confusion, ataxia
            (loss of muscle coordination), and vision problems.
          </li>
          <li>
            <strong>Korsakoff Syndrome:</strong> Leads to memory loss,
            hallucinations, and confabulation (fabricating memories).
          </li>
        </ul>

        <h3>3. Fatigue and Weakness</h3>
        <p>
          Impaired glucose metabolism can lead to feelings of fatigue and
          weakness.
        </p>

        <h3>4. Mental Health Symptoms</h3>
        <p>
          Can contribute to anxiety, depression, irritability, and cognitive
          impairment.
        </p>
      </div>

      <div className="section">
        <h2>Adverse Effects of Excessive Thiamine (Toxicity)</h2>
        <p>
          Thiamine toxicity is rare because it is a water-soluble vitamin.
          However, in rare cases, excessive intake can cause:
        </p>
        <ul>
          <li>
            <strong>Allergic Reactions:</strong> Rashes, itching, and swelling,
            especially from injections.
          </li>
          <li>
            <strong>Digestive Issues:</strong> Nausea, stomach discomfort, and
            abdominal cramps with very high doses.
          </li>
          <li>
            <strong>Hypotension:</strong> Can cause a drop in blood pressure,
            leading to dizziness or fainting.
          </li>
          <li>
            <strong>Nerve Damage:</strong> Rare, but prolonged excessive intake
            may lead to nerve damage.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Recommended Daily Intake</h2>
        <ul>
          <li>
            <strong>Men:</strong> 1.2 mg/day
          </li>
          <li>
            <strong>Women:</strong> 1.1 mg/day
          </li>
          <li>
            <strong>Pregnant/Breastfeeding Women:</strong> 1.4 mg/day
          </li>
        </ul>
        <p>
          Normal intake through diet (whole grains, pork, fish, legumes, and
          seeds) or moderate supplementation is generally safe and beneficial.
        </p>
      </div>
    </div>
  );
};

export default Thiamine;
