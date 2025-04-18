import { UserAvatar } from "./user-avatar";

interface User {
  id: string;
  username: string;
  avatarUrl: string;
}

interface AvatarGroupProps {
  users: User[];
  size?: "sm" | "md" | "lg";
}

export function AvatarGroup({ users, size = "sm" }: AvatarGroupProps) {
  return (
    <div className="flex -space-x-3">
      {users.map((user) => (
        <div key={user.id} className="relative">
          <UserAvatar
            src={user.avatarUrl}
            username={user.username}
            size={size}
          />
        </div>
      ))}
    </div>
  );
}
