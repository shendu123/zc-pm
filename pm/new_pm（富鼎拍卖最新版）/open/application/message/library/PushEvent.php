<?php
/**
 * 推送事件
 * 典型调用方式：
 * $push = new PushEvent();
 * $push->setUser($user_id)->setContent($string)->push();
 */
class PushEvent
{
    /**
     * @var string 目标用户id
     */
    protected $to_user = '';

    /**
     * @var string 推送服务地址
     */
    protected $push_api_url = 'http://192.168.71.239:2121/';

    /**
     * @var string 推送内容
     */
    protected $content = '';

    /**
     * 设置推送用户，若参数留空则推送到所有在线用户
     *
     * @param string $user
     * @return $this
     */
    public function setUser($user = '')
    {
        $this->to_user = $user ? $user : '';
        return $this;
    }

    /**
     * 设置推送内容
     *
     * @param string $content
     * @return $this
     */
    public function setContent($content = array())
    {
        $this->content = json_encode($content);
        return $this;
    }

    /**
     * 推送
     */
    public function push()
    {
        $postData = array(
            'type' => 'publish',
            'content' => $this->content,
            'to' => $this->to_user,
        );

        $ch = curl_init ();
        curl_setopt ( $ch, CURLOPT_URL, $this->push_api_url );
        curl_setopt ( $ch, CURLOPT_POST, 1 );
        curl_setopt ( $ch, CURLOPT_HEADER, 0 );
        curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt ( $ch, CURLOPT_POSTFIELDS, $postData );
        $return = curl_exec ( $ch );
        curl_close ( $ch );
        
        return $return;
    }
}