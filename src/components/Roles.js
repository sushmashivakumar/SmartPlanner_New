export const Roles = [
  {
    role: "project_planner",
    access: [{ assign_feature_owner: true }, { add_edit: true }],
  },
  {
    role: "domain_owner",
    access: [{ assign_feature_owner: false }, { add_edit: false }],
  },
  {
    role: "team_member",
    access: [{ assign_feature_owner: false }, { add_edit: false }],
  },
];

export const Users = [
  {
    email: "sushma@gmail.com",
    role: "project_planner",
  },
  {
    email: "sushmax.hs@intel.com",
    role: "project_planner",
  },
  {
    email: "user@gmail.com",
    role: "domain_owner",
  },
  {
    email: "user1@gmail.com",
    role: "team_member",
  },
];