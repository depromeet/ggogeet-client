import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/src/apis/User';

export default function MyPage() {
  const { data } = useQuery(['userInfo'], getUserInfo);

  return (
    <div>
      <>{data?.name}</>
    </div>
  );
}
