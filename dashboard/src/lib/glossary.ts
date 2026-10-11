/**
 * Metric definitions and glossary per §7 of GRIDNUDGE_DASHBOARD_SPEC.md.
 * Authoritative descriptions for dashboard tooltips and explanations.
 */

export const METRIC_GLOSSARY = {
  peakReduction:
    "(peak of reference policy − peak of GridNudge) / peak of reference, measured over 18:00 to 22:00, mean over seeds, with 95% CI.",
  feederLoadCapacity:
    "Highest feeder load in the peak window divided by feeder capacity.",
  kwhShifted:
    "Energy moved out of the peak window compared with the default plan.",
  nudgesPerUserDay:
    "Nudges delivered divided by user-days.",
  optOutRate:
    "Share of users who muted notifications during the run.",
  attentionBudgetUsed:
    "Nudges delivered in the interval divided by the interval's budget.",
  shadowPrice:
    "Marginal value of the last nudge the budget allowed (how expensive attention is right now).",
  journeyConfidence:
    "Calibrated probability that arrival SOC stays above the reserve for the next planned trip.",
  fleetJourneyConfidence:
    "Share of plugged-in EVs whose journey-confidence lower bound is at least 90%. Calibrated on held-out simulated trips.",
  chargingConfidence:
    "Share of recommended charging plans with predicted wait at arrival at or below 10 minutes and reliability above threshold.",
  uplift:
    "Expected extra benefit caused by the nudge: outcome with the nudge minus outcome with no nudge.",
  upliftPerNudge:
    "kWh caused per nudge sent (twin oracle and estimator both reported).",
  propensity:
    "Probability that the policy chose this action in this context (logged for off-policy evaluation).",
  silentShare:
    "Share of eligible decisions where the best action was 'no nudge' (learned silence).",
  strandedTrips:
    "Trips where a nudge-driven plan left SOC below the reserve at departure; target 0, highlighted gold.",
  calibrationError:
    "Gap between predicted confidence and observed frequency, averaged over bins.",
  flexibility:
    "Expected shiftable charging power in the next peak = sum over EVs of physical envelope × probability of adoption, with Monte Carlo uncertainty.",
  ownershipConfidence:
    "Share of simulated weeks with no range-risk event and acceptable cost for the entered usage profile.",
} as const;
