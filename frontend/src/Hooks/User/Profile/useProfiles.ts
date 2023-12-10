
import { useQuery } from '@tanstack/react-query';
import { UserProfile } from '../../../Generics/interfaces';
import userProfilesService from '../../../services/user/users/user-profiles-service';

const useProfiles = () => {
  return useQuery<UserProfile[], Error>({
    queryKey: ["profiles"],
    queryFn: () =>
      userProfilesService.getAll(),
  });
}

export default useProfiles